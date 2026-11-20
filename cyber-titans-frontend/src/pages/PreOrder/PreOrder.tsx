// src/pages/PreOrder/PreOrder.tsx
import { useState } from 'react';
import { Typography, Button, Box, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { PageContainer, NavbarContainer, FormCard } from './PreOrder.styles';

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

  // Helper to validate future expiration date (MM/YYYY)
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

  // Generate a random cyberpunk transaction number
  const generateTransactionId = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `CTX-${randomNum}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const cleanedCard = cardNumber.replace(/\s+/g, '');
    const isCardValid = /^\d{16}$/.test(cleanedCard);
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
      setSubmitted(true);
    }
  };

  return (
    <PageContainer>
      
      {/* 1. Main Navigation Bar */}
      <NavbarContainer>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em' }}>
          CYBER TITANS
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 5 } }}>
          <Button component={RouterLink} to="/" color="inherit">Home</Button>
          <Button component={RouterLink} to="/characters" color="inherit">Characters</Button>
          <Button component={RouterLink} to="/lore" color="inherit">Lore</Button>
          <Button component={RouterLink} to="/preorder" variant="outlined" color="primary" size="small">Pre-Order</Button>
        </Box>
      </NavbarContainer>

      {/* 2. Pre-Order Form Container */}
      <FormCard>
        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, textAlign: 'center' }}>
          SECURE PRE-ORDER ACCESS
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 1 }}>
          Secure your administrative license for Cyber Titans. Enter payment telemetry below.
        </Typography>

        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 3, display: 'flex', flexDirection: 'column', gap: '1vh' }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
              TRANSACTION SECURED!
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.05em' }}>
              TRANSACTION ID: {transactionId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your pre-order credentials and license key have been dispatched to <strong>{email}</strong>.
            </Typography>
            <Button component={RouterLink} to="/" variant="contained" color="primary" sx={{ mt: 2, fontWeight: 700 }}>
              RETURN TO HOME
            </Button>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
            
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
              helperText={emailError ? "Enter a valid email address (e.g., name@example.com)." : ""}
            />

            <TextField
              label="Cardholder Name"
              variant="outlined"
              size="small"
              fullWidth
              value={cardHolder}
              onChange={(e) => { setCardHolder(e.target.value); if (nameError) setNameError(false); }}
              placeholder="JOHN DOE"
              error={nameError}
              helperText={nameError ? "Must be 2 to 3 words (e.g. First Last)." : ""}
            />

            <TextField
              label="Card Number (16 digits)"
              variant="outlined"
              size="small"
              fullWidth
              value={cardNumber}
              onChange={(e) => { setCardNumber(e.target.value); if (cardError) setCardError(false); }}
              placeholder="0000 0000 0000 0000"
              slotProps={{ htmlInput: { maxLength: 19 } }}
              error={cardError}
              helperText={cardError ? "Must be exactly 16 numeric digits." : ""}
            />

            <Box sx={{ display: 'flex', gap: '1vw' }}>
              <TextField
                label="Expires (MM/YYYY)"
                variant="outlined"
                size="small"
                fullWidth
                value={expiry}
                onChange={(e) => { setExpiry(e.target.value); if (expiryError) setExpiryError(false); }}
                placeholder="MM/YYYY"
                slotProps={{ htmlInput: { maxLength: 7 } }}
                error={expiryError}
                helperText={expiryError ? "Must be a valid future date (MM/YYYY)." : ""}
              />
              <TextField
                label="CVV"
                variant="outlined"
                size="small"
                fullWidth
                value={cvv}
                onChange={(e) => { setCvv(e.target.value); if (cvvError) setCvvError(false); }}
                placeholder="123"
                type="password"
                slotProps={{ htmlInput: { maxLength: 3 } }}
                error={cvvError}
                helperText={cvvError ? "Must be 3 digits." : ""}
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