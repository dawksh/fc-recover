import { createWalletClient, createPublicClient, custom, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { optimism } from 'viem/chains';
import { config } from 'dotenv';

config();

const PKEY = process.env.PRIVATE_KEY

export const publicClient = createPublicClient({
    chain: optimism,
    transport: http(),
});

export const walletClient = createWalletClient({
    chain: optimism,
    transport: http(),
});

// Local Account
export const account = privateKeyToAccount(PKEY as `0x${string}`);