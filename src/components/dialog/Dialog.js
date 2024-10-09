import React from "react";
import { Portal } from "react-portal";
import FocusTrap from "focus-trap-react";
import "./dialog.css";

export default function Dialog({ title, children, onCloseDialog }) {
  return (
    <Portal>
      <FocusTrap active={false}>
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>{title}</h2>
              <button onClick={onCloseDialog} className="close-button">
                ×
              </button>
            </div>
            {children}
          </div>
        </div>
      </FocusTrap>
    </Portal>
  );
}
