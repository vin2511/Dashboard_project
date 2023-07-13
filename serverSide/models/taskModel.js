const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
    taskName: {
        type: String,
        require: true,
        unique: true
    },
    estimatedDuration:Number,
    finalTime: Date,
    status: Boolean,
    comment: String,
    reply: String,
    qa: String,
    codeQuality: String,
},
{ timestamps: true });

const Dashboard = mongoose.model('DashboardTask', dashboardSchema);

module.exports = Dashboard;
