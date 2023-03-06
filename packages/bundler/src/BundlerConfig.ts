// TODO: consider adopting config-loading approach from hardhat to allow code in config file
import ow from "ow";

export interface BundlerConfig {
  beneficiary: string;
  entryPoint: string;
  gasFactor: string;
  minBalance: string;
  mnemonic: string;
  network: string;
  port: string;
  unsafe: boolean;
  conditionalRpc: boolean;

  whitelist?: string[];
  blacklist?: string[];
  maxBundleGas: number;
  minStake: string;
  minUnstakeDelay: number;
  autoBundleInterval: number;
  autoBundleMempoolSize: number;
}

// TODO: implement merging config (args -> config.js -> default) and runtime shape validation
export const BundlerConfigShape = {
  beneficiary: ow.string,
  entryPoint: ow.string,
  gasFactor: ow.string,
  minBalance: ow.string,
  mnemonic: ow.string,
  network: ow.string,
  port: ow.string,
  unsafe: ow.boolean,
  conditionalRpc: ow.boolean,

  whitelist: ow.optional.array.ofType(ow.string),
  blacklist: ow.optional.array.ofType(ow.string),
  maxBundleGas: ow.number,
  minStake: ow.string,
  minUnstakeDelay: ow.number,
  autoBundleInterval: ow.number,
  autoBundleMempoolSize: ow.number,
};

// TODO: consider if we want any default fields at all
// TODO: implement merging config (args -> config.js -> default) and runtime shape validation
export const bundlerConfigDefault: Partial<BundlerConfig> = {
  port: "3000",
  entryPoint: "0x67B2E1091b18ee967339d8A59bAb7b9423B45947",
  unsafe: true,
  conditionalRpc: false,
};
