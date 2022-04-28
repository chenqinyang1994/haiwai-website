import React from 'react';
import { memo } from 'react';
import { extend } from 'koot';

import classNames from 'classnames';
import Game from '@components/game';
import styles from './index.module.less';

// ============================================================================

const Product = extend({
    pageinfo: () => ({
        title: `Super Cleaner`,
        // metas: [{ description: __('pages.home.description') }],
    }),
    styles,
})(
    memo(({ className, ...props }) => {
        return (
            <div className={classNames([className])}>
                <div className="container">
                    <h2 className="title">
                        全部游戏
                        <span>为你提供更多好玩的产品与有趣的体验</span>
                    </h2>

                    <Game />
                </div>
            </div>
        );
    })
);

export default Product;
