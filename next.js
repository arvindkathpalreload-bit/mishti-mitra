"use client";

import React, { useState, useEffect } from 'react';

export default function DeliveryDashboard() {
  // State for the pulsing animation
  const [isDimmed, setIsDimmed] = useState(false);

  // Effect to handle the pulsing "throb" of the online status dot
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsDimmed((prev) => !prev);
    }, 800); // Toggles every 800ms
    return () => clearInterval(intervalId);
  }, []);

  // --- Styles Object ---
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      maxWidth: '500px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa', // Light gray background
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '24px',
      width: '100%',
    },
    logo: {
      width: '80px',
      height: 'auto',
      marginBottom: '12px',
      objectFit: 'contain',
    },
    title: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#FF6B00', // MishTee Orange
      margin: '0',
      textAlign: 'center',
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#e6f4ea',
      padding: '8px 16px',
      borderRadius: '20px',
      marginBottom: '32px',
      border: '1px solid #ceead6',
    },
    pulsingDot: {
      width: '10px',
      height: '10px',
      backgroundColor: '#28a745', // Success Green
      borderRadius: '50%',
      marginRight: '10px',
      transition: 'opacity 0.8s ease-in-out',
      opacity: isDimmed ? 0.4 : 1, // Dynamic opacity for pulse effect
    },
    statusText: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1e7e34',
    },
    card: {
      backgroundColor: '#ffffff',
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      padding: '24px',
      marginBottom: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      boxSizing: 'border-box',
    },
    cardLabel: {
      fontSize: '12px',
      textTransform: 'uppercase',
      color: '#6c757d',
      letterSpacing: '0.5px',
      fontWeight: '600',
    },
    cardValue: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#212529',
    },
    button: {
      width: '100%',
      padding: '16px',
      backgroundColor: '#FF6B00', // MishTee Orange
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(255, 107, 0, 0.2)',
      transition: 'transform 0.1s ease',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <img 
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
          alt="MishTee Magic Logo" 
          style={styles.logo}
        />
        <h1 style={styles.title}>mishTee Delivery Mitra</h1>
      </div>

      {/* Status Section */}
      <div style={styles.statusBadge}>
        <div style={styles.pulsingDot} />
        <span style={styles.statusText}>Agent Online</span>
      </div>

      {/* Task Card */}
      <div style={styles.card}>
        <span style={styles.cardLabel}>Current Task</span>
        <div style={styles.cardValue}>Deliver to: Arjun Mehta</div>
      </div>

      {/* Action Button */}
      <button 
        style={styles.button}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Start Navigation
      </button>
    </div>
  );
}
