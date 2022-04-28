import React from 'react';
import { extend } from 'koot';
import classNames from 'classnames';
import Head from '@components/header';
import Footer from '@components/footer';
import styles from './app.module.less';

// ============================================================================

const App = extend({
    styles,
})(({ className, children, location, ...props }) => {
    const isIanswerAgreement = /ianswer-agreement/.test(location.pathname);

    return (
        <React.StrictMode>
            <div
                className={classNames([
                    className,
                    {
                        'is-home':
                            location.pathname === '' ||
                            location.pathname === '/',
                    },
                ])}
            >
                {!isIanswerAgreement && <Head />}
                <Main children={children} className="main" />
                {/* {!isIanswerAgreement && <Footer />} */}
            </div>
        </React.StrictMode>
    );
});
export default App;

// ============================================================================

const Main = (props) => <main {...props} />;
