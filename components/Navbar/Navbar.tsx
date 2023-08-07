import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>
          <Link href="https://digital-dividends.net" className={styles.link}>
              Trading
            </Link>
            <Link href="/buy" className={styles.link}>
              Buy
            </Link>
            <Link href="/ddt_token" className={styles.link}>
              Mint Token
            </Link>
            <Link href="/sell" className={styles.link}>
              Sell
            </Link>
            <Link href="https://beta.digital-dividends.net" className={styles.link}>
              Beta
            </Link>
            <Link href="https://docs.digital-dividends.net" className={styles.link}>
              Docs
            </Link>
            <iframe src="https://free.timeanddate.com/countdown/i8yvo8hv/n25/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pc03eceb/tcfff/fs100/szw320/szh135/tatDigital%20Dividends%20Launch%20in/tac000/tptDigital%20Dividends%20Launched/tpc000/mat%20/mac000/mpc000/iso2023-08-07T19:00:00/bas4/pa4" width="266px"
     height="70px" ></iframe>

          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
