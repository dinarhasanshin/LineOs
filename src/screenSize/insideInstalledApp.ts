import React from "react";

export default () => {
    return window.matchMedia('(display-mode: standalone)').matches || ('standalone' in window.navigator);
}