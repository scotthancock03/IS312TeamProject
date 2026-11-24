// src/pages/PreOrder/PreOrder.tsx
import { useState } from 'react';
import { Typography, Button, Box, TextField, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { PageContainer, FormCard } from './PreOrder.styles';

const SANDBOX_CARD = '4242424242424242';

export default function PreOrder() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  // Field-specific error states
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [cardError, setCardError] = useState(false);
  const [expiryError, setExpiryError] = useState(false);
  const [cvvError, setCvvError] = useState(false);

  const isFutureExpiry = (expiryStr: string) => {
    const match = expiryStr.match(/^(0[1-9]|1[0-2])\/(\d{4})$/);
    if (!match) return false;

    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10);

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    if (year > currentYear) return true;
    if (year === currentYear && month >= currentMonth) return true;
    return false;
  };

  const generateTransactionId = () => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const randomNum = 100000 + (array[0] % 900000);
    return `CTX-${randomNum}`;
  };

  const handleFillTestCard = () => {
    setCardHolder('JANE DOE');
    setCardNumber('4242 4242 4242 4242');
    setExpiry('12/2029');
    setCvv('000');
    setNameError(false);
    setCardError(false);
    setExpiryError(false);
    setCvvError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const cleanedCard = cardNumber.replace(/\s+/g, '');
    // Only allow the sandbox test card so real cards are never accepted
    const isCardValid = cleanedCard === SANDBOX_CARD;
    const isExpiryValid = isFutureExpiry(expiry);
    const isCvvValid = /^\d{3}$/.test(cvv);

    const nameWords = cardHolder.trim().split(/\s+/);
    const isNameValid = cardHolder.trim().length > 0 && nameWords.length >= 2 && nameWords.length <= 3;

    setEmailError(!isEmailValid);
    setNameError(!isNameValid);
    setCardError(!isCardValid);
    setExpiryError(!isExpiryValid);
    setCvvError(!isCvvValid);

    if (isEmailValid && isNameValid && isCardValid && isExpiryValid && isCvvValid) {
      setTransactionId(generateTransactionId());
      setCardNumber('');
      setExpiry('');
      setCvv('');
      setCardHolder('');
      setSubmitted(true);
    }
  };

  return (
    <PageContainer>
      <FormCard>
        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
          SECURE PRE-ORDER ACCESS
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 1 }}>
          Demo — No real payment is processed.
        </Typography>

        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 3, display: 'flex', flexDirection: 'column', gap: '1vh' }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
              DEMO TRANSACTION SECURED!
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.05em' }}>
              TRANSACTION ID: {transactionId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Simulated confirmation generated for <strong>{email}</strong> (no real charge made).
            </Typography>
            <Button component={RouterLink} to="/" variant="contained" color="primary" sx={{ mt: 2, fontWeight: 700 }}>
              RETURN TO HOME
            </Button>
          </Box>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}
          >
            <Alert severity="info" sx={{ mb: 0.5, fontSize: '0.8rem' }}>
              <strong>Demo:</strong> Do not enter real card info. Use test card{' '}
              <strong>4242 4242 4242 4242</strong> or click below.
            </Alert>

            <Button
              type="button"
              variant="outlined"
              size="small"
              onClick={handleFillTestCard}
              sx={{ alignSelf: 'flex-end', fontSize: '0.75rem' }}
            >
              Fill Test Card
            </Button>

            <TextField
              label="Email Address"
              variant="outlined"
              size="small"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(false); }}
              placeholder="user@domain.com"
              error={emailError}
              helperText={emailError ? 'Enter a valid email address (e.g., name@example.com).' : ''}
            />

            <TextField
              label="Cardholder Name"
              variant="outlined"
              size="small"
              fullWidth
              value={cardHolder}
              onChange={(e) => { setCardHolder(e.target.value); if (nameError) setNameError(false); }}
              placeholder="JANE DOE"
              slotProps={{ htmlInput: { autoComplete: 'off', 'data-lpignore': 'true', 'data-1p-ignore': true } }}
              error={nameError}
              helperText={nameError ? 'Must be 2 to 3 words (e.g. First Last).' : ''}
            />

            <TextField
              label="Test Card Number"
              variant="outlined"
              size="small"
              fullWidth
              value={cardNumber}
              onChange={(e) => { setCardNumber(e.target.value); if (cardError) setCardError(false); }}
              placeholder="4242 4242 4242 4242"
              slotProps={{ htmlInput: { maxLength: 19, autoComplete: 'off', 'data-lpignore': 'true', 'data-1p-ignore': true } }}
              error={cardError}
              helperText={cardError ? 'Demo mode: use test card 4242 4242 4242 4242.' : ''}
            />

            <Box sx={{ display: 'flex', gap: '1vw' }}>
              <TextField
                label="Expires (MM/YYYY)"
                variant="outlined"
                size="small"
                fullWidth
                value={expiry}
                onChange={(e) => { setExpiry(e.target.value); if (expiryError) setExpiryError(false); }}
                placeholder="12/2029"
                slotProps={{ htmlInput: { maxLength: 7, autoComplete: 'off', 'data-lpignore': 'true', 'data-1p-ignore': true } }}
                error={expiryError}
                helperText={expiryError ? 'Must be a valid future date (MM/YYYY).' : ''}
              />
              <TextField
                label="Test CVV"
                variant="outlined"
                size="small"
                fullWidth
                value={cvv}
                onChange={(e) => { setCvv(e.target.value); if (cvvError) setCvvError(false); }}
                placeholder="000"
                type="password"
                slotProps={{ htmlInput: { maxLength: 3, autoComplete: 'new-password', 'data-lpignore': 'true', 'data-1p-ignore': true } }}
                error={cvvError}
                helperText={cvvError ? 'Must be 3 digits.' : ''}
              />
            </Box>

            <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 1, fontWeight: 700 }}>
              AUTHORIZE PRE-ORDER
            </Button>
          </Box>
        )}
      </FormCard>
    </PageContainer>
  );
}