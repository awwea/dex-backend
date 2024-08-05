import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
    ManyToOne,
    Unique,
} from 'typeorm';
import { Block } from '../../block/block.entity';

@Entity({ name: 'pair-created-events' })
@Unique('pair-created-events-transactionIndex_transactionHash_logIndex', [
    'transactionIndex',
    'transactionHash',
    'logIndex',
])
export class PairCreatedEvent {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @ManyToOne(() => Block, { eager: true })
    block: Block;

    @Column()
    token0: string;

    @Column()
    token1: string;

    @Column()
    transactionIndex: number;

    @Column()
    transactionHash: string;

    @Column()
    logIndex: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
