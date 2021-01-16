import {SECONDS_IN_MINUTE} from "../const.js";
import {getStats, getFilmInDateRange, getCharsData} from "../utils/stats.js";
import dayjs from "dayjs";
import SmartView from "./smart";
import Chart from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Intervals = {
  ALL_TIME: {
    value: `all-time`,
    name: `All time`
  },
  YEAR: {
    value: `year`,
    name: `Year`
  },
  MONTH: {
    value: `month`,
    name: `Month`
  },
  WEEK: {
    value: `week`,
    name: `Week`
  },
  TODAY: {
    value: `today`,
    name: `Today`
  }
};

const renderDaysChart = (statisticCtx, films, dateFrom, dateTo) => {
  const BAR_HEIGHT = 50;
  const filmInDateRange = getFilmInDateRange(films, dateFrom, dateTo);
  const charsData = getCharsData(filmInDateRange);

  statisticCtx.height = BAR_HEIGHT * Object.keys(charsData).length;

  return new Chart(statisticCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: Object.keys(charsData),
      datasets: [{
        data: Object.values(charsData),
        backgroundColor: `#ffe800`,
        hoverBackgroundColor: `#ffe800`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 20
          },
          color: `#ffffff`,
          anchor: `start`,
          align: `start`,
          offset: 40,
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#ffffff`,
            padding: 100,
            fontSize: 20
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 24
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      }
    }
  });
};

const createDurationTemplate = (duration) => {
  const hours = Math.floor(duration / SECONDS_IN_MINUTE);
  const minutes = Math.floor(duration % SECONDS_IN_MINUTE);

  return hours > 0
    ? `<p class="statistic__item-text">${hours} <span class="statistic__item-description">h</span> ${minutes} <span class="statistic__item-description">m</span></p>`
    : `<p class="statistic__item-text">${minutes} <span class="statistic__item-description">m</span></p>`;
};

const createIntervalToggleTemplate = (currentInterval) => {
  return Object.values(Intervals).map((interval) => `<input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-${interval.value}" value="${interval.value}" ${currentInterval.value === interval.value ? `checked` : ``}>
      <label for="statistic-${interval.value}" class="statistic__filters-label">${interval.name}</label>`).join(``);
};

const createStatisticsTemplate = (data) => {
  const {films} = data;
  const currentInterval = Intervals.WEEK;
  const stats = getStats(films);
  const {watched, rank, totalDuration, favoriteGenre} = stats;
  const durationTemplate = createDurationTemplate(totalDuration);
  const intervalToggleTemplate = createIntervalToggleTemplate(currentInterval);

  return `<section class="statistic">
    <p class="statistic__rank">
      Your rank
      <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      <span class="statistic__rank-label">${rank}</span>
    </p>

    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>

      ${intervalToggleTemplate}
    </form>

    <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">${watched} <span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        ${durationTemplate}
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">${favoriteGenre}</p>
      </li>
    </ul>

    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>

  </section>`;
};

export default class Statistics extends SmartView {
  constructor(films) {
    super();
    this._data = {
      films,
      dateFrom: (() => {
        const daysToFullWeek = Intervals.WEEK;
        return dayjs().subtract(1, daysToFullWeek).toDate();
      })(),
      dateTo: dayjs().toDate()
    };

    this._daysChart = null;

    this._dateChangeHandler = this._dateChangeHandler.bind(this);

    this._setCharts();
  }

  _getTemplate() {
    return createStatisticsTemplate(this._data);
  }

  removeElement() {
    super.removeElement();

    if (this._daysChart !== null) {
      this._daysChart = null;
    }
  }

  restoreHandlers() {
    this._setCharts();
  }

  _dateChangeHandler([dateFrom, dateTo]) {
    if (!dateFrom || !dateTo) {
      return;
    }

    this._updateData({
      dateFrom,
      dateTo
    });
  }

  _setCharts() {
    if (this._daysChart !== null) {
      this._daysChart = null;
    }

    const {films, dateFrom, dateTo} = this._data;
    const statisticCtx = this.element.querySelector(`.statistic__chart`);

    this._daysChart = renderDaysChart(statisticCtx, films, dateFrom, dateTo);
  }
}
