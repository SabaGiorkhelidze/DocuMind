import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn  } from "typeorm";
import { Document } from "./Document"; 
import { User } from "./User"; 


@Entity("metrics")
export class Metrics {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (user) => user.metrics)
  @JoinColumn({ name: "userId" })
  user!: User;

  @Column({ type: "varchar", length: 50 })
  type!: string;

  @ManyToOne(() => Document, { nullable: true })
  @JoinColumn({ name: "documentId" })
  document!: Document;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  timestamp!: Date;

  @Column({ type: "integer" })
  durationMs!: number;
}