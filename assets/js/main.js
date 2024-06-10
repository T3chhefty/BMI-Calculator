// buttons
let usMetricsButton = document.querySelector("#us-metric-btn");
let metricsButton = document.querySelector("#metric-units-btn");

// sections
let usMetricSection = document.querySelector("#us-units-section");
let MetricSection = document.querySelector("#metric-units-section");

function usMetricTab() {
  usMetricSection.style.display = "block";
  MetricSection.style.display = "none";
  usMetricsButton.style.backgroundColor = "#EEEEEE";
  usMetricsButton.style.color = "#000";
  metricsButton.style.backgroundColor = "#336699";
  metricsButton.style.color = "#fff";
}

function MetricTab() {
  usMetricSection.style.display = "none";
  MetricSection.style.display = "block";
  usMetricsButton.style.backgroundColor = "#336699";
  usMetricsButton.style.color = "#fff";
  metricsButton.style.backgroundColor = "#eeeeee";
  metricsButton.style.color = "#000";
}
