class GreenHousePage {
  get applyBtn() {
    return $("#apply_button");
  }

  get applyLinkedinBtn() {
    return $('[src="https://www.linkedin.com/mjobs/awli/awliWidget"]');
  }
}

module.exports = new GreenHousePage();
