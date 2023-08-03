import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const DDT_Token: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className={styles.heroAssetFrame}>
          <iframe
     src="https://embed.ipfscdn.io/ipfs/bafybeigtqeyfmqkfbdu7ubjlwhtqkdqckvee7waks4uwhmzdfvpfaqzdwm/erc20.html?contract=0x09EC7bD6b2E5B83f4eA67E1c2A54CD841D9338C0&chain=%7B%22name%22%3A%22BNB+Smart+Chain+Mainnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance.rpc.thirdweb.com%2F0fb1be2dfb7e52daae145bb6df7982b5%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22BNB+Chain+Native+Token%22%2C%22symbol%22%3A%22BNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnb%22%2C%22chainId%22%3A56%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22binance%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fbinance-coin%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=0fb1be2dfb7e52daae145bb6df7982b5&theme=dark&primaryColor=cyan"
     width="600px"
     height="600px"
    
    ></iframe>
            {/* <Image
              src="/DD-NFT.gif"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            /> */}
          </div>
          
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Digital Dividends
                </span>
                <br />
                DDT Token Drop
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://digital-dividends.net"
                  target="_blank"
                >
                  DDT Token
                </Link>{" "}
                 Is needed to interact with <b> Digital</b> <i>Dividends Ecosystem!</i>
              </p>
              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="https://docs.digital-dividends.net">
                  Learn More
                </Link>
                </div>                            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DDT_Token;
