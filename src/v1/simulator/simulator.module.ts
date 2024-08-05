import { Module } from '@nestjs/common';
import { SimulatorController, SimulatorControllerDeprecated } from './simulator.controller';
import { CoinMarketCapModule } from '../../coinmarketcap/coinmarketcap.module';
import { SimulatorService } from './simulator.service';
import { TradingFeePpmUpdatedEventModule } from '../../events/trading-fee-ppm-updated-event/trading-fee-ppm-updated-event.module';
import { PairTradingFeePpmUpdatedEventModule } from '../../events/pair-trading-fee-ppm-updated-event/pair-trading-fee-ppm-updated-event.module';
import { HistoricQuoteModule } from '../../historic-quote/historic-quote.module';

@Module({
    imports: [
        CoinMarketCapModule,
        TradingFeePpmUpdatedEventModule,
        PairTradingFeePpmUpdatedEventModule,
        HistoricQuoteModule,
    ],
    controllers: [SimulatorController, SimulatorControllerDeprecated],
    providers: [SimulatorService],
})
export class SimulatorModule {}
