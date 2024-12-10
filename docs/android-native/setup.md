import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CTAButton from "../../src/components/CTAButton";
import versions from '@site/sms-version-constants';

# Kotlin Project Setup

### Prerequisites

- Download [Android Studio](https://developer.android.com/studio) for development and device management.

- Follow the [prerequisite setup](../developers/development-setup#prerequisite-setup) guide to set up your [Android Device/Emulator](../developers/development-setup#2-setup-deviceemulator) and install a MWA-compatible wallet, like [fakewallet](../developers/development-setup#3-install-a-wallet-app).

## Solana Mobile Kotlin Compose Scaffold

The quickest way to start developing on Kotlin is to build off of the [Solana Jetpack Compose Scaffold](https://github.com/solana-mobile/solana-kotlin-compose-scaffold) example.

The scaffold is a basic Solana Android app built with [Jetpack Compose](https://developer.android.com/jetpack/compose) and Material 3 components.

Follow the quickstart guide to install and run the scaffold app.

<CTAButton label="Quickstart" to="/android-native/quickstart" />

## Android Project Setup

### Setting up a fresh Android Project

Follow these steps to setup a fresh Android project with the recommended libraries for Solana development.

#### Step 1: Navigate to your Android project's build.gradle file

In Android Studio, navigate to your Android project's module `build.gradle.kts` file.

#### Step 2. Add Solana dependencies

Include the following dependencies to your Android project's `build.gradle.kts` file. These
are the recommended core Kotlin libraries for Solana transaction building, RPC requests, and wallet signing.

<Tabs>
<TabItem value="build.gradle.kts" label="build.gradle.kts">

<pre><code language="groovy">

{
`dependencies {
    implementation("com.solanamobile:mobile-wallet-adapter-clientlib-ktx:${versions.KOTLIN_MWA_CLIENTLIB_KTX_VERSION}")
    implementation("com.solanamobile:web3-solana:${versions.KOTLIN_WEB3_SOLANA_VERSION}")
    implementation("com.solanamobile:rpc-core:${versions.KOTLIN_RPC_CORE_VERSION}")
    implementation("io.github.funkatronics:multimult:${versions.KOTLIN_MULTIMULT_VERSION}")
}`
}

</code></pre>

</TabItem>
</Tabs>

<details>
<summary>Overview of each dependency:</summary>

- `com.solanamobile:mobile-wallet-adapter-clientlib-ktx`: Mobile Wallet Adapter client library for interacting with MWA-compatible wallets.
- `com.solanamobile:web3-solana`: Solana Kotlin library providing core Solana primitives like transaction building and public key class.
- `com.solanamobile:rpc-core`: A Kotlin library providing a generic interface and abstractions for building Solana RPC requests.
- `io.github.funkatronics:multimult`: Lightweight utility library for Base58 conversions.

</details>

#### Step 3. Build and run your app

Your project's dependencies should be set up and you can try building and run the app!

## Next Steps

Congrats! At this point, you have installed the necessary libraries for your project and are ready to start building an app that interacts with the Solana network.

Check out the other resources on this site like guides, SDK references, and sample apps to learn more about what you can do.
