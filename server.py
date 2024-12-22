from flask import Flask, request, jsonify, render_template
from SentimentAnalysis.sentiment_analysis import sentiment_analyzer

app = Flask("Sentiment Analyzer")

@app.route("/sentimentAnalyzer")
def sent_analyzer():
    text_to_analyze = request.args.get("textToAnalyze")
    if not text_to_analyze:
        return jsonify({"error:": "No text to analyze"}), 400


    response = sentiment_analyzer(text_to_analyze)

    label = response["label"]
    score = response["score"]

    return jsonify({
        "message": f"The given text has been identified as {label.split('_')[1]} with a score of {score}."
    })


@app.route("/")
def render_index_page():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)