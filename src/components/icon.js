import { Icon } from '@wordpress/components';
import { __experimentalZStack as ZStack } from '@wordpress/components';

import { sprintf } from '@wordpress/i18n';

/*  */
function GPQLIcon( iconName ) {
    // Taken from the <Icon> component at
    // https://github.com/WordPress/gutenberg/blob/bbdf1a7f39dd75f672fe863c9d8ac7bf8faa874b/packages/components/src/icon/index.tsx#L54C2-L54C44
    const BaseSize = 'string' === typeof iconName ? 20 : 24;
    const NameTagSize = 12; // BaseSize/2;
    const NameTagMargin = sprintf('-$%dpx', BaseSize/4 );
    // console.log('BaseSize', BaseSize);
    // console.log('NameTagMargin', NameTagMargin);
    // https://github.com/WordPress/gutenberg/blob/bbdf1a7f39dd75f672fe863c9d8ac7bf8faa874b/packages/block-editor/src/components/block-icon/index.js#L23
    const NameTagIcon = () => <Icon icon="nametag" size={ NameTagSize } />;
    const OtherIcon = () => <Icon icon={ iconName } />;

    return (
        <ZStack offset={15} isLayered>
            <OtherIcon />
            <div style={{
                color:'var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))',
                // color:'fuchsia',
                // marginLeft: '24px',
                // marginTop: '12px',
                marginTop: NameTagMargin,
                // marginBottom: '-12px',
                // marginRight: '-24px',
                marginRight: NameTagMargin,
            }}>
                <NameTagIcon />
            </div>
        </ZStack>
	);
}

export default GPQLIcon;
