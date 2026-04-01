"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Environment, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function CuteRobot() {
  const groupRef = useRef<THREE.Group>(null)
  const leftEyeRef = useRef<THREE.Mesh>(null)
  const rightEyeRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    }
    // Blinking eyes
    const blink = Math.sin(state.clock.elapsedTime * 3) > 0.98 ? 0.1 : 1
    if (leftEyeRef.current) leftEyeRef.current.scale.y = blink
    if (rightEyeRef.current) rightEyeRef.current.scale.y = blink
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -0.3, 0]} scale={1.2}>
        {/* Main Head - Rounded Sphere */}
        <Sphere args={[1.3, 64, 64]} position={[0, 0, 0]}>
          <MeshTransmissionMaterial
            color="#8b5cf6"
            thickness={0.5}
            roughness={0.1}
            transmission={0.3}
            ior={1.5}
            chromaticAberration={0.02}
            backside={false}
          />
        </Sphere>
        
        {/* Inner glow sphere */}
        <Sphere args={[1.15, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#7c3aed" 
            metalness={0.9} 
            roughness={0.1}
            envMapIntensity={2}
          />
        </Sphere>
        
        {/* Face Visor */}
        <mesh position={[0, 0.1, 1]}>
          <capsuleGeometry args={[0.5, 0.4, 16, 32]} />
          <meshStandardMaterial 
            color="#1e1b4b" 
            metalness={0.95} 
            roughness={0.05}
            envMapIntensity={1}
          />
        </mesh>
        
        {/* Left Eye */}
        <Sphere ref={leftEyeRef} args={[0.18, 32, 32]} position={[-0.28, 0.15, 1.15]}>
          <meshStandardMaterial 
            color="#22d3ee" 
            emissive="#22d3ee"
            emissiveIntensity={3}
            toneMapped={false}
          />
        </Sphere>
        
        {/* Right Eye */}
        <Sphere ref={rightEyeRef} args={[0.18, 32, 32]} position={[0.28, 0.15, 1.15]}>
          <meshStandardMaterial 
            color="#22d3ee" 
            emissive="#22d3ee"
            emissiveIntensity={3}
            toneMapped={false}
          />
        </Sphere>
        
        {/* Cute Smile */}
        <mesh position={[0, -0.15, 1.18]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
          <meshStandardMaterial 
            color="#a855f7" 
            emissive="#a855f7"
            emissiveIntensity={1}
          />
        </mesh>
        
        {/* Left Antenna */}
        <group position={[-0.5, 1.1, 0]}>
          <mesh>
            <cylinderGeometry args={[0.04, 0.04, 0.4, 16]} />
            <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.2} />
          </mesh>
          <Sphere args={[0.12, 16, 16]} position={[0, 0.3, 0]}>
            <meshStandardMaterial 
              color="#f472b6" 
              emissive="#f472b6"
              emissiveIntensity={2}
              toneMapped={false}
            />
          </Sphere>
        </group>
        
        {/* Right Antenna */}
        <group position={[0.5, 1.1, 0]}>
          <mesh>
            <cylinderGeometry args={[0.04, 0.04, 0.4, 16]} />
            <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.2} />
          </mesh>
          <Sphere args={[0.12, 16, 16]} position={[0, 0.3, 0]}>
            <meshStandardMaterial 
              color="#22d3ee" 
              emissive="#22d3ee"
              emissiveIntensity={2}
              toneMapped={false}
            />
          </Sphere>
        </group>
        
        {/* Ear Bumps */}
        <Sphere args={[0.25, 32, 32]} position={[-1.15, 0, 0]}>
          <meshStandardMaterial color="#6d28d9" metalness={0.8} roughness={0.2} />
        </Sphere>
        <Sphere args={[0.25, 32, 32]} position={[1.15, 0, 0]}>
          <meshStandardMaterial color="#6d28d9" metalness={0.8} roughness={0.2} />
        </Sphere>
        
        {/* Glow Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.6, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color="#a855f7" 
            emissive="#a855f7"
            emissiveIntensity={1.5}
            transparent
            opacity={0.5}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  )
}

function OrbitingElements() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Orbiting spheres */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2
        const radius = 2.8
        return (
          <Sphere 
            key={i} 
            args={[0.08, 16, 16]} 
            position={[Math.cos(angle) * radius, Math.sin(angle * 2) * 0.3, Math.sin(angle) * radius]}
          >
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#a855f7" : "#22d3ee"} 
              emissive={i % 2 === 0 ? "#a855f7" : "#22d3ee"}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </Sphere>
        )
      })}
    </group>
  )
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const [positions, colors] = useMemo(() => {
    const count = 80
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 3 + Math.random() * 2
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      
      const c = new THREE.Color(Math.random() > 0.5 ? "#a855f7" : "#22d3ee")
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [])
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={80} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={80} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

export default function Robot3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-10, -5, -10]} intensity={0.8} color="#22d3ee" />
        <spotLight position={[0, 15, 5]} angle={0.3} penumbra={1} intensity={1.5} color="#ffffff" />
        
        <CuteRobot />
        <OrbitingElements />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
