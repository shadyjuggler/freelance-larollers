function isSafari() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /safari/.test(userAgent) && !/chrome|crios|edge|opr/.test(userAgent);
  }
  