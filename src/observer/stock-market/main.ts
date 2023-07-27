import StockMarket from "./StockMarket";
import BrokerDisplay from "./BrokerDisplay";
import InvestorDisplay from "./InvestorDisplay";
import PublicDisplay from "./PublicDisplay";

const stockMarket = new StockMarket();

const brokerDisplay = new BrokerDisplay();
const investorDisplay = new InvestorDisplay();
const publicDisplay = new PublicDisplay();

stockMarket.registerObserver(brokerDisplay);
stockMarket.registerObserver(investorDisplay);
stockMarket.registerObserver(publicDisplay);

stockMarket.setStockPrice("Google", 100);