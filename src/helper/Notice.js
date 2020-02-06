import {notification} from "antd";

/**
 * 全局通知框
 */
export class Notice {

    static defaultConfig = {
        placement: 'topRight',
        duration: 5,
        message: "提示",
    };

    static warning(description) {
        let config = {
            description: description,
        };
        Object.assign(config, this.defaultConfig);

        notification.warning(config);
    };

    static success(description) {
        let config = {
            description: description,
        };
        Object.assign(config, this.defaultConfig);

        notification.success(config);
    }

    static error(description) {
        let config = {
            description: description,
        };
        Object.assign(config, this.defaultConfig);
        notification.error(config);
    }
}