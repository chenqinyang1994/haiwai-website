import React from 'react';
import { memo, useState, useEffect } from 'react';
import { extend } from 'koot';

import classNames from 'classnames';
import clearIconImg from '@assets/haiwai-img/clear-icon.png';
import styles from './index.module.less';

// ============================================================================

const Game = extend({
    pageinfo: () => ({
        title: `Super Booster`,
        // metas: [{ description: __('pages.home.description') }],
    }),
    styles,
})(
    memo(({ className, ...props }) => {
        const [allGame, setAllGame] = useState([]);

        useEffect(() => {
            setAllGame([
                {
                    article_id: 1,
                    icon: clearIconImg,
                    title: 'Super Booster',
                    info: `SuperBooster is a software that focuses on mobile phone acceleration, with simple and effective functions.`,
                },
            ]);
        }, []);
        return (
            <div className={classNames([className])}>
                <div className="listWrap">
                    {allGame.map((el) => {
                        return (
                            <div
                                key={el.article_id}
                                className="box"
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={() => {
                                    // getHistory().push({
                                    //     pathname: `/game/${el.article_id}`,
                                    // });
                                }}
                            >
                                <img
                                    className="game-logo"
                                    src={el.icon}
                                    alt="logo"
                                />
                                <div className="describe">
                                    <h3 className="name">{el.title}</h3>
                                    <p className="desc">{el.info}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    })
);

export default Game;
