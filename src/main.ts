import { ID_REGISTRY_EIP_712_TYPES } from '@farcaster/hub-web';
import { walletClient, account } from './clients';
import { readNonce, getDeadline } from './helpers';

const deadline = getDeadline();

readNonce().then(nonce => {
    console.log(deadline)
    walletClient.signTypedData({
        account,
        ...ID_REGISTRY_EIP_712_TYPES,
        primaryType: 'Transfer',
        message: {
            fid: 2483n,
            to: account.address,
            nonce,
            deadline: BigInt(deadline),
        },
    }).then(signature => {
        console.log("Deadline: ", deadline);
        console.log("Signature: ", signature)
    })

})