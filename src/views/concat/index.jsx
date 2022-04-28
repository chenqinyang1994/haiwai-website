import React from 'react';
import { memo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';
import styles from './index.module.less';

const Concat = extend({
    pageinfo: () => ({
        title: `Super Cleaner`,
    }),
    styles,
})(
    memo(({ className, ...props }) => {
        return (
            <div className={classNames([className, 'container', 'clearfix'])}>
                <div className="concatPage">
                    <h3 className="title">
                        <span></span>
                    </h3>
                    <div></div>
                </div>
            </div>
        );
    })
);

export default Concat;
