import React from 'react';
import { memo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import { Link } from 'react-router';
import styles from './index.module.less';

const Head = extend({
    pageinfo: () => ({
        title: `Super Cleaner`,
    }),
    styles,
})(
    memo(({ className }) => {
        return (
            <div className={classNames([className])}>
                <section className="headerBox">
                    <h2 className="logo">
                        <Link to="/">Super Cleaner</Link>
                    </h2>
                </section>
            </div>
        );
    })
);

export default Head;
