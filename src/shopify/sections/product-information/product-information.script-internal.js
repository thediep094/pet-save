class ProductQualityPurchased extends HTMLElement {
    /**
     * get minus to check if number = 01 can't click and click to minus
     */
    minus;
    /**
     * get plus  to click to plus
     */
    plus;
    /**
       * get number to change number
       */
    number;
    constructor() {
        super();
        this.minus = document.getElementById('productInformation__qualityPurchased__minus');
        this.plus = document.getElementById('productInformation__qualityPurchased__plus');
        this.number = document.getElementById('productInformation__qualityPurchased__number__text');
    }
    connectedCallback() {
        this.minus.addEventListener('click', this.minusClick.bind(this));
        this.plus.addEventListener('click', this.plusClick.bind(this));
    }
    disconnectedCallback() {
        this.minus.removeEventListener('click', this.minusClick.bind(this));
        this.plus.removeEventListener('click', this.plusClick.bind(this));
    }
    minusClick() {
        if (Number(this.number.innerText) > 1) {
            this.number.innerText = String(Number(this.number.innerText) - 1);
        }
    }
    plusClick() {
        this.number.innerText = String(Number(this.number.innerText) + 1);
    }
}
customElements.define('product-quality-purchased', ProductQualityPurchased);
class ProductChoosePack extends HTMLElement {
    /**
     * check if click select open modal select
     */
    select;
    /**
     * select modal to open and close
     */
    modal;
    /**
     * boolean to check if click select open modal select and close modal select
     */
    isOpen;
    constructor() {
        super();
        this.select = document.getElementById('productInformation__form__select');
        this.modal = document.getElementById('productInformation__form__select__modal');
        this.isOpen = false;
    }
    connectedCallback() {
        this.select.addEventListener('click', this.selectClick.bind(this));
    }
    disconnectedCallback() {
        this.select.removeEventListener('click', this.selectClick.bind(this));
    }
    selectClick() {
        if (this.isOpen) {
            this.modal.classList.remove('productInformation__form__select__modal--open');
            this.isOpen = false;
        }
        else {
            this.modal.classList.add('productInformation__form__select__modal--open');
            this.isOpen = true;
        }
    }
}
