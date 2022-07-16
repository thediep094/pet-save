

class ProductQualityPurchased extends HTMLElement{
  /**
   * get minus to check if number = 01 can't click and click to minus
   */
  minus : HTMLElement;
  /**
   * get plus  to click to plus
   */
  plus: HTMLElement;
  /**
     * get number to change number
     */
 number: HTMLElement;

  constructor(){
    super()
    this.minus = document.getElementById('productInformation__qualityPurchased__minus') as HTMLElement;
    this.plus = document.getElementById('productInformation__qualityPurchased__plus') as HTMLElement;
    this.number = document.getElementById('productInformation__qualityPurchased__number__text') as HTMLElement;
  }
  connectedCallback(){
    this.minus.addEventListener('click', this.minusClick.bind(this))
    this.plus.addEventListener('click', this.plusClick.bind(this))
  }
  disconnectedCallback(){
    this.minus.removeEventListener('click', this.minusClick.bind(this))
    this.plus.removeEventListener('click', this.plusClick.bind(this))
  }
  minusClick(){
    if(Number(this.number.innerText) > 1){
      this.number.innerText = String(Number(this.number.innerText) - 1);
    }
  }
  plusClick(){
    this.number.innerText = String(Number(this.number.innerText) + 1)
  }
}

customElements.define('product-quality-purchased', ProductQualityPurchased)


class ProductChoosePack extends HTMLElement{
  /**
   * check if click select open modal select
   */
  select : HTMLElement;
  /**
   * select modal to open and close
   */
  modal : HTMLElement;
  /**
   * boolean to check if click select open modal select and close modal select
   */
  isOpen: boolean;
  constructor(){
    super()
    this.select = document.getElementById('productInformation__form__select') as HTMLElement;
    this.modal = document.getElementById('productInformation__form__select__modal') as HTMLElement;
    this.isOpen = false;
  }
  connectedCallback(){
    this.select.addEventListener('click', this.selectClick.bind(this))
  }
  disconnectedCallback(){
    this.select.removeEventListener('click', this.selectClick.bind(this))
  }

  selectClick(){
    if(this.isOpen){
      this.modal.classList.remove('productInformation__form__select__modal--open')
      this.isOpen = false;
    }
    else{
      this.modal.classList.add('productInformation__form__select__modal--open')
      this.isOpen = true;
    }
  }

}

