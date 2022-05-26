import React, { memo, useState, useEffect } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';
import Game from '@components/game';
import Recommend from '@components/recommend';
import styles from './index.module.less';

const PageHome = extend({
    pageinfo: () => ({
        title: `Super Booster`,
    }),
    styles,
})(
    memo(({ className, ...props }) => {
        return (
            <div className={classNames([className])}>
                <Recommend />
                <div className="gameWrap">
                    <h2 className="title">Recommend Products</h2>
                    <Game num={6} className="allGame" />
                </div>
            </div>
        );
    })
);

export default PageHome;
