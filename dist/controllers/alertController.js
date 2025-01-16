"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlertsHandler = exports.createAlertHandler = void 0;
const alertService_1 = require("../services/alertService");
const createAlertHandler = async (req, res, next) => {
    try {
        const alert = await (0, alertService_1.addAlert)(req.body);
        res.status(201).json({ message: "Alert created successfully.", alert });
    }
    catch (error) {
        next(error);
    }
};
exports.createAlertHandler = createAlertHandler;
const getAlertsHandler = async (req, res, next) => {
    try {
        const alerts = await (0, alertService_1.fetchAlerts)();
        res.status(200).json(alerts);
    }
    catch (error) {
        next(error);
    }
};
exports.getAlertsHandler = getAlertsHandler;
