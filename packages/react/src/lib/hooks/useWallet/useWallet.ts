import { useContext } from 'react';
import { SeiWallet, SeiWalletContext } from '../../provider';
import { AccountData, OfflineSigner } from '@cosmjs/proto-signing';

type UseWallet = {
	connectedWallet?: SeiWallet;
	chainId: string;
	restUrl: string;
	rpcUrl: string;
	offlineSigner?: OfflineSigner;
	accounts: readonly AccountData[];
	disconnect: () => void;
};
const useWallet = (): UseWallet => {
	const { connectedWallet, chainId, restUrl, rpcUrl, offlineSigner, accounts, disconnect } = useContext(SeiWalletContext);

	return { connectedWallet, chainId, restUrl, rpcUrl, offlineSigner, accounts, disconnect };
};

export default useWallet;
