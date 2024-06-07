// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
    kotlinSidebar: [
        {
            type: 'html',
            value: 'Kotlin',
            className: 'android-native sidebar-header',
        },
        {
            type: 'doc',
            id: 'android-native/overview',
            label: 'Overview'
        },
        {
            type: 'doc',
            id: 'android-native/setup',
            label: 'Setup'
        },
        {
            type: 'doc',
            id: 'android-native/quickstart',
            label: 'Quickstart'
        },

        /* Guides Section */
        {
            type: 'html',
            value: '<div class="sidebar-divider" />',
        },
        {
            type: 'html',
            value: 'Kotlin Developer Guides',
            className: 'sidebar-section-header',
        },
        {
            type: 'doc',
            id: 'android-native/making_rpc_requests',
            label: 'Making RPC requests'
        },
        {
            type: 'category',
            label: "Building transactions",
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'android-native/building_transactions',
                    label: 'Basics: Build a transaction'
                },
                {
                    type: 'doc',
                    id: 'android-native/building-anchor-program-transactions',
                    label: 'Building Anchor program transactions'
                },
            ]
        },
        {
            type: 'category',
            label: "Using Mobile Wallet Adapter",
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'android-native/using_mobile_wallet_adapter',
                    label: 'Basics: Usage guide'
                },
                {
                    type: 'doc',
                    id: 'android-native/sending-sol',
                    label: 'Example: Sign and send a SOL transfer'
                },
            ]
        },

        /* Reference Section */
        {
            type: 'html',
            value: '<div class="sidebar-divider" />',
        },
        {
            type: 'html',
            value: 'References',
            className: 'sidebar-section-header',
        },
        {
            type: 'link',
            href: 'https://www.javadoc.io/doc/com.solanamobile/mobile-wallet-adapter-clientlib-ktx/latest/index.html',
            label: 'Kotlin MWA reference'
        },
    ]  
  };