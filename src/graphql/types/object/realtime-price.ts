import getUuidByString from "uuid-by-string"

import { GT } from "@graphql/index"

import Timestamp from "../scalar/timestamp"

import DisplayCurrencyGT from "../scalar/display-currency"

import PriceOfOneSatInMinorUnit from "./price-of-one-sat-in-minor-unit"
import PriceOfOneUsdCentInMinorUnit from "./price-of-one-usd-cent-in-minor-unit"

const RealtimePrice = GT.Object({
  name: "RealtimePrice",
  fields: () => ({
    id: {
      type: GT.NonNullID,
      resolve: (source) =>
        getUuidByString(`${source.timestamp}-${source.denominatorCurrency}`),
    },
    timestamp: {
      type: GT.NonNull(Timestamp),
      description:
        "Unix timestamp (number of seconds elapsed since January 1, 1970 00:00:00 UTC)",
    },
    denominatorCurrency: { type: GT.NonNull(DisplayCurrencyGT) },

    btcSatPrice: { type: GT.NonNull(PriceOfOneSatInMinorUnit) },
    usdCentPrice: { type: GT.NonNull(PriceOfOneUsdCentInMinorUnit) },
  }),
})

export default RealtimePrice
