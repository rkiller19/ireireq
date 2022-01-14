import { getDefaultProvider } from '@ethersproject/providers';
import { useEffect, useState } from 'react';

export function useENS(address: string | null | undefined) {
  const [ensName, setENSName] = useState<string | null>();

  useEffect(() => {
    async function resolveENS() {
      if (address) {
        const provider = await getDefaultProvider();
        const name = await provider.lookupAddress(address);
        if (name) setENSName(name);
      }
    }
    resolveENS();
  }, [address]);

  return { ensName };
}
>>>>>>> d4f57c8a58a42e0fcfa56df04241ae1cf43d927b
