import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";
import { strategistAgent } from "../agents/strategist";
import { creatorAgent } from "../agents/creator";
import { publisherAgent } from "../agents/publisher";

// This function triggers when a new document is created in the 'campaigns' collection
export const onCampaignCreated = onDocumentCreated(
    {
        document: "campaigns/{campaignId}",
        secrets: ["GEMINI_API_KEY"],
        timeoutSeconds: 540,
        memory: "1GiB",
        region: "us-central1"  // Match your Firestore region
    },
    async (event) => {
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
            const research = await strategistAgent(topic);
            await snapshot.ref.update({
                status: "DRAFTING",
                progress: 40,
                research: research
            });

            // 3. Run Creator Agent
            logger.info("🤖 Creator Agent: Writing content...");
            const drafts = await creatorAgent(research);
            await snapshot.ref.update({
                status: "PUBLISHING",
                progress: 80,
                drafts: drafts
            });

            // 4. Run Publisher Agent
            logger.info("🤖 Publisher Agent: Finalizing...");
            await publisherAgent(campaignId, drafts);

            logger.info("✅ Campaign completed successfully!");

        } catch (error) {
            logger.error("❌ Error in AI Agency Workflow:", error);
            await snapshot.ref.update({
                status: "ERROR",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
);
