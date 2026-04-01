"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, RoundedBox, Environment } from '@react-three/drei'
import * as THREE from 'three'

function RobotHead() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Main Head */}
        <RoundedBox args={[2, 2.2, 1.8]} radius={0.35} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#7c3aed" 
            metalness={0.8} 
            roughness={0.2}
            envMapIntensity={1}
          />
        </RoundedBox>
        
        {/* Face Plate */}
        <RoundedBox args={[1.6, 1.4, 0.15]} radius={0.15} smoothness={4} position={[0, 0.1, 0.9]}>
          <meshStandardMaterial 
            color="#1e1b4b" 
            metalness={0.9} 
            roughness={0.1}
            envMapIntensity={0.5}
          />
        </RoundedBox>
        
        {/* Left Eye */}
        <Sphere args={[0.25, 32, 32]} position={[-0.45, 0.2, 1]}>
          <meshStandardMaterial 
            color="#06b6d4" 
            emissive="#06b6d4"
            emissiveIntensity={2}
            metalness={0.5}
            roughness={0.1}
          />
        </Sphere>
        
        {/* Right Eye */}
        <Sphere args={[0.25, 32, 32]} position={[0.45, 0.2, 1]}>
          <meshStandardMaterial 
            color="#06b6d4" 
            emissive="#06b6d4"
            emissiveIntensity={2}
            metalness={0.5}
            roughness={0.1}
          />
        </Sphere>
        
        {/* Mouth/Speaker Grill */}
        <RoundedBox args={[0.8, 0.15, 0.1]} radius={0.05} smoothness={4} position={[0, -0.35, 1]}>
          <meshStandardMaterial 
            color="#a855f7" 
            emissive="#a855f7"
            emissiveIntensity={0.5}
            metalness={0.7}
            roughness={0.3}
          />
        </RoundedBox>
        
        {/* Left Antenna */}
        <group position={[-0.6, 1.3, 0]}>
          <RoundedBox args={[0.1, 0.5, 0.1]} radius={0.03} smoothness={4}>
            <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          <Sphere args={[0.12, 16, 16]} position={[0, 0.35, 0]}>
            <meshStandardMaterial 
              color="#06b6d4" 
              emissive="#06b6d4"
              emissiveIntensity={1.5}
            />
          </Sphere>
        </group>
        
        {/* Right Antenna */}
        <group position={[0.6, 1.3, 0]}>
          <RoundedBox args={[0.1, 0.5, 0.1]} radius={0.03} smoothness={4}>
            <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          <Sphere args={[0.12, 16, 16]} position={[0, 0.35, 0]}>
            <meshStandardMaterial 
              color="#a855f7" 
              emissive="#a855f7"
              emissiveIntensity={1.5}
            />
          </Sphere>
        </group>
        
        {/* Ear Pieces */}
        <RoundedBox args={[0.2, 0.6, 0.4]} radius={0.08} smoothness={4} position={[-1.1, 0, 0]}>
          <meshStandardMaterial color="#5b21b6" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <RoundedBox args={[0.2, 0.6, 0.4]} radius={0.08} smoothness={4} position={[1.1, 0, 0]}>
          <meshStandardMaterial color="#5b21b6" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        
        {/* Glow Ring around head */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.03, 16, 100]} />
          <meshStandardMaterial 
            color="#a855f7" 
            emissive="#a855f7"
            emissiveIntensity={1}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingParticles() {
  const particles = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })
  
  const particleCount = 50
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8
  }
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#a855f7" 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function GlowingSphere() {
  return (
    <Sphere args={[3, 64, 64]} position={[0, 0, -3]}>
      <MeshDistortMaterial
        color="#4c1d95"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.8}
        transparent
        opacity={0.15}
      />
    </Sphere>
  )
}

export default function Robot3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <spotLight
          position={[0, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
        />
        
        <RobotHead />
        <FloatingParticles />
        <GlowingSphere />
      </Canvas>
    </div>
  )
}
