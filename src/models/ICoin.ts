export interface ICoin {
    id:                               string;
    symbol:                           string; // ticker
    name:                             string;
    image:                            string; // url
    current_price:                    number;
    market_cap:                       number;
    market_cap_rank:                  number;
    fully_diluted_valuation:          number;
    total_volume:                     number;
    high_24h:                         number;
    low_24h:                          number;
    price_change_24h:                 number;
    price_change_percentage_24h:      number;
    market_cap_change_24h:            number;
    market_cap_change_percentage_24h: number;
    circulating_supply:               number;
    total_supply:                     number;
    max_supply:                       number;
    ath:                              number; // all time high
    ath_change_percentage:            number;
    ath_date:                         string;
    last_updated:                     string;
}