import React, { useState } from 'react';
import { extend } from 'koot';

import styles from './index.module.less';

const IanswerAgreement = extend({
    pageinfo: () => ({
        title: `隐私协议`,
    }),
    styles,
})(({ className, location }) => {
    const [loading, setLoading] = useState(false);

    return (
        <div className={className}>
            {loading && (
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
            {!loading && (
                <div
                    className="section"
                    dangerouslySetInnerHTML={{
                        __html: '',
                    }}
                />
            )}
        </div>
    );
});

export default IanswerAgreement;
