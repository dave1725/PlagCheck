    // function to remove punctuation and convert it to lowercase
    function preprocessText(text) {
        return text.replace(/[^\w\s]|_/g, "")
            .replace(/\s+/g, " ")
            .toLowerCase();
    }

    function documentSimilarityWithCommonParts(doc1, doc2) {
        //Phase1: Preprocessing -> remove punctuation and convert to lowercase
        const words1 = preprocessText(doc1).split(' ');
        const words2 = preprocessText(doc2).split(' ');
        console.log(words1,words2);
        //Phase2: Get the length of each document
        const m = words1.length;
        const n = words2.length;

        //Phase3: Initialize DP table with zeros
        const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

        //Phase4: Fill DP table and keep track of the path
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (words1[i - 1] === words2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        //Phase5: Retrieve the LCS (common parts)
        let commonParts = [];
        let i = m, j = n;
        while (i > 0 && j > 0) {
            if (words1[i - 1] === words2[j - 1]) {
                commonParts.unshift(words1[i - 1]); // store the common word
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }

        return {
            similarityScore: (dp[m][n] / m) * 100, // the length of the longest common subsequence
            commonParts: commonParts.join(' ') // the actual words in the common subsequence
        };
    }

    // Example usage:

    // const doc1 = "Modern businesses increasingly rely on digital marketing techniques to gain visibility and engage with consumers across various platforms. Effective strategies like search engine optimization, social media campaigns, and targeted email outreach are essential for growing customer bases and enhancing brand loyalty."

    // const doc2 = "Contemporary companies are turning to digital advertising methods to increase their market presence and interact with customers through multiple channels. Key tactics include optimizing for search engines, conducting social media promotions, and executing direct email campaigns to expand their audience and build consumer trust.";

    export default(documentSimilarityWithCommonParts);