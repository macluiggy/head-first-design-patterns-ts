export default class PublicDisplay {
  update(stockName: string, stockPrice: number) {
    console.log(`PublicDisplay: stock ${stockName} has price ${stockPrice}`);
  }
}