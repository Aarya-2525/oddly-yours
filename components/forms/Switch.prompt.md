Checkbox and Switch are the two binary controls — Checkbox for lists/agreements, Switch for settings toggles. Both use a thick ink border and a bouncy transition on state change.

```jsx
<Checkbox checked={agreed} onChange={setAgreed} label="I promise to be a little odd" />
<Switch checked={dark} onChange={setDark} label="Weird mode" />
```
