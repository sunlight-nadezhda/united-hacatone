export default class Menu {
  constructor (menuSettings) {
    this._handleClose = this._handleCloseMenu.bind(this);
    this._menuSettings = menuSettings;
    this._mediaQuery = window.matchMedia('(min-width: 560px)');
  }

  handleViewMenu() {
    this._toggleClassList();
    this._changeOfState(this._menuSettings.menuLinks,'header__menu-links_type_row','header__menu-links_type_column');
    this._menuSettings.closeButton.addEventListener('click', this._handleClose);
  }
  
  _handleCloseMenu() {
    this._toggleClassList();
    this._changeOfState(this._menuSettings.menuLinks,'header__menu-links_type_column','header__menu-links_type_row');
    this._menuSettings.closeButton.removeEventListener('click', this._handleClose);
  }
  
  _toggleClassList() {
    this._menuSettings.menuLinks.classList.toggle('header__overlay');
    this._menuSettings.langLinks.classList.toggle('lead__lang-links_menu-visible');
    this._menuSettings.menuLinks.classList.toggle('appear');
    this._menuSettings.closeButton.classList.toggle('button-close_active');
    this._menuSettings.menuButton.classList.toggle('button-menu_inactive');
    this._menuSettings.userLeadInfo.classList.toggle('lead__info_inactive');
    this._menuSettings.content.classList.toggle('content_inactive');
  }

  _changeOfState(item, initialState, changedState) {
    item.classList.remove(initialState);
    item.classList.add(changedState);
  }
  
  _findAlreadySelectedItem(parentItem) {
    const selectedItem = parentItem.querySelector('.page__link_active');
    if (selectedItem !== null) selectedItem.classList.remove('page__link_active');
  }
  
  _setItemToSelectedStatus(item) {
    if (this._menuSettings.content.classList.contains('content_inactive')) {
      this._handleCloseMenu();
      this._menuSettings.content.classList.remove('content_inactive');
    }
    item.classList.add('page__link_active');
  }
  
  handleSelectItem(evt,parentItem) {
    if (evt.target.classList.contains('page__link')) {
      this._findAlreadySelectedItem(parentItem);
      this._setItemToSelectedStatus(evt.target);
    }
  }
  
  closeColumnMenu() {
    if ((this._mediaQuery.matches) && (this._menuSettings.menuLinks.classList.contains('header__menu-links_type_column'))) {
      this._handleCloseMenu();
    }
  }

  setEventListeners() {
    this._menuSettings.langLinks.addEventListener('click', (evt) => this.handleSelectItem(evt, this._menuSettings.langLinks));
    this._menuSettings.menuLinks.addEventListener('click', (evt) => this.handleSelectItem(evt, this._menuSettings.menuLinks));
    this._menuSettings.menuButton.addEventListener('click', this.handleViewMenu.bind(this));
    window.addEventListener('resize', this.closeColumnMenu.bind(this));
  }

}
