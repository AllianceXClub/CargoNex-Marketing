"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCampaignCreated = void 0;
const firestore_1 = require("firebase-functions/v2/firestore");
const logger = __importStar(require("firebase-functions/logger"));
const strategist_1 = require("../agents/strategist");
const creator_1 = require("../agents/creator");
const publisher_1 = require("../agents/publisher");
// This function triggers when a new document is created in the 'campaigns' collection
exports.onCampaignCreated = (0, firestore_1.onDocumentCreated)({
    document: "campaigns/{campaignId}",
    secrets: ["GEMINI_API_KEY"],
    timeoutSeconds: 540,
    memory: "1GiB",
    region: "us-central1" // Match your Firestore region
}, async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
        logger.error("No data associated with the event");
        return;
    }
    const data = snapshot.data();
    const campaignId = event.params.campaignId;
    const topic = data.topic;
    if (!topic) {
        logger.warn(`Campaign ${campaignId} created without a topic.`);
        return;
    }
    logger.info(`🚀 Starting AI Agency for Campaign: ${campaignId} | Topic: ${topic}`);
    try {
        // 1. Update status to RESEARCHING
        await snapshot.ref.update({ status: "RESEARCHING", progress: 10 });
        // 2. Run Strategist Agent
        logger.info("🤖 Strategist Agent: Analyzing trends...");
        const research = await (0, strategist_1.strategistAgent)(topic);
        await snapshot.ref.update({
            status: "DRAFTING",
            progress: 40,
            research: research
        });
        // 3. Run Creator Agent
        logger.info("🤖 Creator Agent: Writing content...");
        const drafts = await (0, creator_1.creatorAgent)(research);
        await snapshot.ref.update({
            status: "PUBLISHING",
            progress: 80,
            drafts: drafts
        });
        // 4. Run Publisher Agent
        logger.info("🤖 Publisher Agent: Finalizing...");
        await (0, publisher_1.publisherAgent)(campaignId, drafts);
        logger.info("✅ Campaign completed successfully!");
    }
    catch (error) {
        logger.error("❌ Error in AI Agency Workflow:", error);
        await snapshot.ref.update({
            status: "ERROR",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
});
//# sourceMappingURL=campaignHandler.js.map