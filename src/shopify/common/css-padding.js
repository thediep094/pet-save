const cssPadding = `.section-{{ section.id }}-padding {
  padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
  padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}px;
}

@media screen and (min-width: 750px) {
  .section-{{ section.id }}-padding {
    padding-top: {{ section.settings.padding_top }}px;
    padding-bottom: {{ section.settings.padding_bottom }}px;
  }
}`;

module.exports = cssPadding;
