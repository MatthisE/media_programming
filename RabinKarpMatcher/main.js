function rabinKarpMatcher(T, P, d, q) {
  const n = T.length;
  const m = P.length;
  const h = Math.pow(d, m - 1) % q;

  let p = 0;  // Hash value for pattern
  let t = 0;  // Hash value for text window

  // Preprocessing: compute initial hash values for P and T[0..m-1]
  for (let i = 0; i < m; i++) {
    p = (d * p + P.charCodeAt(i)) % q;
    t = (d * t + T.charCodeAt(i)) % q;
  }

  // Slide the pattern over text
  for (let s = 0; s <= n - m; s++) {
    if (p === t) {
      // Hashes match, verify actual substring
      if (T.substring(s, s + m) === P) {
        console.log("Pattern occurs with shift", s);
      }
    }
    // Calculate hash for next window
    if (s < n - m) {
      t = (d * (t - T.charCodeAt(s) * h) + T.charCodeAt(s + m)) % q;

      // Make sure hash is positive
      if (t < 0) {
        t = (t + q);
      }
    }
  }
}

const T = "hello world world";;
const P = "world";
const d = 10; //Radix (usually 10)
const q = 13;
rabinKarpMatcher(T, P, d, q);
