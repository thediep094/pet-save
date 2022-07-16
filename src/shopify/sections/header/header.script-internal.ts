class HeaderCustom extends HTMLElement {
  /**
   * Header wrapper element
   */
  header: HTMLElement;

  /**
   * Check if home page
   * then add class header__transparent
   */
  isHomePage: boolean;

  /**
   * Header search button.
   * When click: permit scroll and open search modal
   */
  headerSearch: HTMLElement;

  /**
   * Close search button.
   * When click: allow scroll and close search modal
   */
  closeSearch: HTMLElement;

  /**
   * Search modal element
   */
  searchModal: HTMLElement;

  /**
   * HTML body element
   */
  body: HTMLElement;

  /**
   * Current header position
   */
  currentScrollTop: number;

  constructor() {
    super();
    this.header = document.getElementById('header') as HTMLElement;
    this.isHomePage = document.getElementById('template-index') !== null;
    this.headerSearch = document.getElementById('header__search') as HTMLElement;
    this.closeSearch = document.getElementById('header__search__modal__close') as HTMLElement;
    this.searchModal = document.getElementById('header__search__modal') as HTMLElement;
    this.body = document.querySelector('body') as HTMLElement;
    this.currentScrollTop = 0;
    this.onScrollHandle = this.onScroll.bind(this);
  }

  connectedCallback() {
    window.addEventListener('scroll', this.onScrollHandle);
    this.headerSearch.addEventListener('click', this.onSearchClick.bind(this));
    this.closeSearch.addEventListener('click', this.onSearchClick.bind(this));
    this.firstCheck();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScrollHandle);
    this.headerSearch.removeEventListener('click', this.onSearchClick.bind(this));
  }

  onScrollHandle = () : void => {
    this.onScroll();
  };

  firstCheck() {
    if (!this.isHomePage) {
      this.header.classList.add('header__nothome');
      this.headerSearch.classList.add('header__search__background');
    }
  }

  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0) {
      if (this.isHomePage) {
        this.header.classList.add('header__transparent');
        this.header.classList.remove('header__white');
        this.headerSearch.classList.remove('header__search__background');
      } else {
        this.header.classList.add('header__white');
        this.header.classList.remove('header__transparent');
      }
    } else if (scrollTop > 0 && this.currentScrollTop > scrollTop) {
      this.header.classList.add('header__up');
      this.header.classList.remove('header__transparent');
      this.header.classList.remove('header__down');
      this.headerSearch.classList.add('header__search__background');
    } else if (scrollTop > 0 && scrollTop > this.currentScrollTop) {
      this.header.classList.add('header__down');
      this.header.classList.remove('header__transparent');
      this.header.classList.remove('header__up');
      this.headerSearch.classList.add('header__search__background');
    }
    this.currentScrollTop = scrollTop;
  }

  onSearchClick() {
    if (!this.searchModal.classList.contains('header__search__modal--active')) {
      this.body.classList.add('disable-scroll');
      this.body.classList.remove('enable-scroll');
      this.searchModal.classList.add('header__search__modal--active');
    } else {
      this.body.classList.add('enable-scroll');
      this.body.classList.remove('disable-scroll');
      this.searchModal.classList.remove('header__search__modal--active');
    }
  }
}

customElements.define('header-custom', HeaderCustom);
