/* eslint-disable no-unused-expressions, no-unused-vars */
import tld3 from '../../src/core/core';
import d3 from '../../node_modules/d3';
import chai from '../../node_modules/chai';
import Browser from '../../node_modules/zombie';

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Bar Chart methods functionality', () => {
  const browser = new Browser();
  const dataBarChart =
    [
    { 'letterTest': 'A', 'frequencyTest': 0.08167 },
    { 'letterTest': 'B', 'frequencyTest': 0.01492 },
    { 'letterTest': 'C', 'frequencyTest': 0.02782 },
    { 'letterTest': 'D', 'frequencyTest': 0.04253 },
    { 'letterTest': 'E', 'frequencyTest': 0.12702 },
    { 'letterTest': 'F', 'frequencyTest': 0.02288 },
    { 'letterTest': 'G', 'frequencyTest': 0.02015 },
    { 'letterTest': 'H', 'frequencyTest': 0.06094 },
    { 'letterTest': 'I', 'frequencyTest': 0.06966 },
    { 'letterTest': 'J', 'frequencyTest': 0.00153 },
    { 'letterTest': 'K', 'frequencyTest': 0.00772 },
    { 'letterTest': 'L', 'frequencyTest': 0.04025 },
    { 'letterTest': 'M', 'frequencyTest': 0.02406 },
    { 'letterTest': 'N', 'frequencyTest': 0.06749 },
    { 'letterTest': 'O', 'frequencyTest': 0.07507 },
    { 'letterTest': 'P', 'frequencyTest': 0.01929 },
    { 'letterTest': 'Q', 'frequencyTest': 0.00095 },
    { 'letterTest': 'R', 'frequencyTest': 0.05987 },
    { 'letterTest': 'S', 'frequencyTest': 0.06327 },
    { 'letterTest': 'T', 'frequencyTest': 0.09056 },
    { 'letterTest': 'U', 'frequencyTest': 0.02758 },
    { 'letterTest': 'V', 'frequencyTest': 0.00978 },
    { 'letterTest': 'W', 'frequencyTest': 0.0236 },
    { 'letterTest': 'X', 'frequencyTest': 0.0015 },
    { 'letterTest': 'Y', 'frequencyTest': 0.01974 },
    { 'letterTest': 'Z', 'frequencyTest': 0.00074 },
    ];

  before(() => {
    return browser.visit('file://' + __dirname + '/../index.html');
  });

  describe('Bar Chart methods', () => {
    it('should make a chart in a div with id "barchart"', () => {
      const barChart = browser.window.tld3.make('BarChart');
      barChart.using(dataBarChart).in('#barchart');
      const barId = barChart.element.attr('id');
      expect(barId).to.equal('barchart').and.to.be.an('String');
    });

    it('should make a chart with a class "bar"', () => {
      const barChart = browser.window.tld3.make('BarChart');
      barChart.using(dataBarChart).in('#barchart');
      const barClass = browser.window.d3.select('#barchart').select('rect').attr('class');
      expect(barClass).to.equal('bar').and.to.be.an('String');
    });

    it('should make rects to represent data for the bar chart', () => {
      const barChart = browser.window.tld3.make('BarChart');
      barChart.using(dataBarChart).in('#barchart');
      const barRect = browser.window.d3.select('#barchart').select('rect')[0];
      expect(barRect).to.exist;
    });

    it('should set the right x-column name', () => {
      const barChart = browser.window.tld3.make('BarChart');
      barChart.using(dataBarChart).in('#barchart');
      const barXColumn = barChart.getxAxisLabel;
      expect(barXColumn).to.equal('letterTest');
    });

    it('should set the right y-column name', () => {
      const barChart = browser.window.tld3.make('BarChart');
      barChart.using(dataBarChart).in('#barchart');
      const barYColumn = barChart.getyAxisLabel;
      expect(barYColumn).to.equal('frequencyTest');
    });
  });
});
