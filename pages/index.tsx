import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
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
     src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.gateway.ipfscdn.io/?contract=0x3DCd997F81D032eC31b4d1f6f49228C9E645C5BA&chain=%7B%22name%22%3A%22BNB+Smart+Chain+Testnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance-testnet.rpc.thirdweb.com%2Fa8a7f8aa7ddd8115bad1892b179be99f%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22BNB+Chain+Native+Token%22%2C%22symbol%22%3A%22tBNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnbt%22%2C%22chainId%22%3A97%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22binance-testnet%22%7D&theme=dark&primaryColor=cyan"
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
                NFT Marketplace
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://digital-dividends.net"
                  target="_blank"
                >
                  Level up
                </Link>{" "}
                 your earning potential with  <b> Digital</b> <i>Dividends!</i>.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="/sell"
                  target="_blank"
                >
                  My NFTs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
