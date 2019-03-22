import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    const renderEmpty = () => <div />;
    const renderModal = () => {
        return (
            <div
                onClick={props.onDismis}
                className={`ui dimmer modals visible active`}
            >
                <div
                    onClick={e => e.stopPropagation()}
                    className="ui standard modal visible active"
                >
                    <i onClick={props.onDismis} className="close icon" />
                    <div className="header">{props.title}</div>
                    <div className="scrolling content">{props.content}</div>
                    <div className="actions">{props.actions}</div>
                </div>
            </div>
        );
    };

    const modal = props.show ? renderModal() : renderEmpty();

    return ReactDOM.createPortal(modal, document.querySelector('#modal'));
};

export default Modal;
